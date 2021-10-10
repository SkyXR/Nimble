import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

function main(sources) {
  return {
		DOM: xs.of(
			<div className="ml-5 mt-10 mb-2 text-xs text-gray-600 text-left">
				<div className="flex">
					<div>
						<img className="h-40" src="paloma/palomabird.png" />
						<a href="/">
							<ul className="mt-3">
								<li>Instagram</li>
								<li>Youtube</li>
								<li>itch.io</li>
								<li className="mt-3 text-black"><b>Videogames</b></li>
								<li>Songs of the lost</li>
								<li>Oceanarium</li>
								<li>Museum of Symmetry</li>
								<li>Palmystery</li>
								<li>ALEA</li>
								<li>Gardenarium</li>
								<li>Dream Warrior</li>
								<li className="mt-3 text-black"><b>Films</b></li>
								<li>Scentifiq Piqniq</li>
								<li>Life Spectrum</li>
								<li className="mt-3 text-black"><b>Comics</b></li>
								<li>Summerland</li>
								<li>Gardenarium</li>
								<li>Muscle Glasses</li>
								<li>A lot of time has passed</li>
								<li>Museum of Symmetry</li>
								<li>Red vs Blue</li>
							</ul>
						</a>
					</div>
					<div>
						<div className="flex">
							<img className="h-40 mt-10" src="paloma/palomalogo.png" />
							<img className="ml-5 mt-2 h-12" src="paloma/cart.png" />
						</div>
						<div className="flex mt-12">
							<div className="flex mr-4 flex-col items-start">
								<img className="w-52 mb-2" src="paloma/paloma0.png" />	
								<p className="mb-5">Sketches etc</p>
								<img className="w-52 mb-2" src="paloma/paloma3.png" />	
								<p className="mb-5">Blue Rocks</p>
								<img className="w-52 mb-2" src="paloma/paloma5.png" />	
								<p className="mb-5">Waterfall</p>
							</div>
							<div className="flex mr-4 flex-col items-start">
								<img className="w-48 mb-2" src="paloma/paloma1.png" />	
								<p className="mb-5">Wavey</p>
								<img className="w-48 mb-2" src="paloma/paloma6.jpg" />	
								<p className="mb-5">Summerland</p>
							</div>
							<div className="flex flex-col items-start">
								<img className="w-48 mb-2" src="paloma/paloma2.png" />	
								<p className="mb-5">Argentina</p>
								<img className="w-48 mb-2" src="paloma/paloma4.png" />	
								<p className="mb-5">Seaweed</p>
								<img className="w-48 mb-2" src="paloma/paloma7.png" />	
								<p className="mb-5">Scientific Piqniq</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
  }
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);
