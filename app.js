import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function midiAccess(midi) {
	console.log(midi)
}	

function midiFailed() {
	console.log("failed!")
}

function main(sources) {
	navigator.requestMIDIAccess().then(midiAccess, midiFailed)
	
  const dom = {
		DOM: xs.of(
			<div className="mt-20 mb-2 mx-10 text-center">
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
