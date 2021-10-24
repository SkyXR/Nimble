import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function main(sources) {
	var rx = xs
	var a = new Audio('seasnare.wav')
	var b = new Audio('seasnare2.wav')
	var c = new Audio('seasnare3.wav')
	var d = new Audio('seasnare4.wav')
	a.volume = 0.5
	b.volume = 0.5
	c.volume = 0.5
	d.volume = 0.5

	var i = 0
	rx.fromPromise(navigator.requestMIDIAccess()).addListener({'next': 
		function(midi) {
			var ctrl = midi.inputs.values().next().value
			ctrl.onmidimessage = function(x) {
				if (x.data[0] != 176) {
					console.log(x.data)
					if (x.data[0] == 153) {
						x = i % 4
						if (x == 0) { a.play() }
						if (x == 1) { b.play() }
						if (x == 2) { c.play() }
						if (x == 3) { d.play() }
						i++
					}
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
