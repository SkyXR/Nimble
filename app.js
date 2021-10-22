import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function main(sources) {
	var rx = xs

	rx.fromPromise(navigator.requestMIDIAccess()).addListener({'next': 
		function(midi) {
			var ctrl = midi.inputs.values().next().value
			ctrl.onmidimessage = function(x) {
				if (x.data[0] != 176) {
					console.log(x.data[0])
				}
			}
		}
	})
	
  const dom = {
		DOM: rx.of(
			<div className="mt-20 mb-2 mx-10 text-center">
				<p>wadi</p>
			</div>
		)
  }

  return dom;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);


/*
			var producer = {
				start: function (listener) {
					for (var input of midi.inputs.values()) {
						input.onmidimessage = function(message) {
							console.log("adaida")
							listener.next(message)
						}
					}
				},
				stop: function () {
					console.log("unimplenented")
				},
			}
			var stream = rx.create(producer)
*/
