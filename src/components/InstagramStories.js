/* eslint-disable jsx-a11y/anchor-is-valid */

const CATS = [
  'http://placekitten.com/300/300',
  'http://placekitten.com/301/300',
  'http://placekitten.com/302/300',
  'http://placekitten.com/303/300',
  'http://placekitten.com/304/300',
  'http://placekitten.com/305/300'
];


export default function InstagramStories() {
  return (
    <ul className="flex space-x-4 m-4">
      {CATS.map((cat, index) =>
        <li key={'cat' + index} className="text-center">
          <div className="relative rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1">
            <a href="#">
              <img className="h-24 w-24 rounded-full bg-white p-1" src={cat} alt={`cat-${index}`} />
            </a>
            {index === 0 ?
              <div className="absolute bottom-0 right-1">
                <button className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-mono text-xl border-2 border-white hover:bg-blue-800 focus:outline-none">+</button>
              </div>
              : ''
            }
          </div>
          <a href="#">Cat {index + 1}</a>
        </li>
      )}
    </ul>
  )
}
