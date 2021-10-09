import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function main(sources) {
  const dom = {
		DOM: xs.of(
			<div>
				<h2>this is a live prototyping env with cycle.js integration</h2>
			</div>
		)
  }

  return dom;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);
