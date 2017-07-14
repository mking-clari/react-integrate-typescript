const Handlebars = require('handlebars');
const Immutable = require('immutable');
const path = require('path');
const shell = require('shelljs');
const yargs = require('yargs');

const language = yargs.argv.language;
const depth = yargs.argv.depth;
const templates = path.resolve(__dirname, 'templates');
const out = path.resolve(__dirname, '../src/tree');

const scriptExtension = language;
const reactExtension = `${language}x`;

function executeTemplate(shellString, context) {
  return Handlebars.compile(shellString.toString())(context);
}

function createNodeName(path) {
  return `Node${path.map(level => `L${level}`).join('')}`;
}

function createNode(nodeIds) {
  const childIds = nodeIds.size === depth ?
    Immutable.List() :
    Immutable.Range(0, 2).toList();

  const node = Immutable.Map({
    name: createNodeName(nodeIds),
    children: childIds.map(id => Immutable.Map({
      name: createNodeName(nodeIds.push(id)),
    })).toList(),
  });

  shell.echo(executeTemplate(shell.cat(path.resolve(templates, `Node.${reactExtension}.hbs`)), {
    node: node.toJS(),
  }))
    .to(path.resolve(out, `components/${node.get('name')}.${reactExtension}`));

  shell.echo(executeTemplate(shell.cat(path.resolve(templates, 'Node.scss.hbs')), {
    node: node.toJS(),
  }))
    .to(path.resolve(out, `components/${node.get('name')}.scss`));

  childIds.forEach(id => createNode(nodeIds.push(id)));
}

shell.rm('-rf', out);
shell.mkdir('-p', path.resolve(out, 'components'));
createNode(Immutable.List());
shell.cp(path.resolve(templates, `Tree.${reactExtension}`), path.resolve(out, `components/Tree.${reactExtension}`));
shell.cp(path.resolve(templates, `index.${scriptExtension}`), path.resolve(out, `index.${scriptExtension}`));
