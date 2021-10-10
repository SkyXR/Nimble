import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function main(sources) {
  const dom = {
		DOM: xs.of(
			<div className="mt-10 mb-2 mx-10 text-center">
				<h1 className="bg-purple-300 mb-5 font-bold text-2xl">this is a live prototyping env with budo, cycle.js, jsx & tailwind</h1>
				<p className="mb-1">it's a simple way of approaching coding</p>
				<p className="mb-3">edit js which pulls events from a stream and renders out html in response using frp & jsx</p>
				<img className="mx-auto w-64" src="castle.jpg" />
			</div>
		)
  }

  return dom;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);
