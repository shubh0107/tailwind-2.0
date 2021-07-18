import React from 'react';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';


var SONGS = [
  {
    name: 'White Iverson',
    artist: 'Post Malone',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg'
  },
  {
    name: 'In Tongues',
    artist: 'Joji',
    albumArt: 'https://pro2-bar-s3-cdn-cf.myportfolio.com/d3f6ef10-f418-4239-9f20-9b8d7b3d63e1/8ff9cfa7-435e-478f-a79d-90a7f0384cc3_rw_1920.png?h=11e17194aee167a2c1f2903106122129'
  },
  {
    name: 'Skin',
    artist: 'Flume',
    albumArt: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Currents',
    artist: 'Tame Impala',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png'
  },
  {
    name: 'Heads Up',
    artist: 'War Paint',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Heads_Up_-_Warpaint.jpg/220px-Heads_Up_-_Warpaint.jpg'
  },
  {
    name: 'Angels',
    artist: 'The Strokes',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Strokes_1.jpg'
  },
  {
    name: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273e175a19e530c898d167d39bf'
  },
  {
    name: 'American Idiot',
    artist: 'Green Day',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png'
  },
  {
    name: 'Magma',
    artist: 'Gojira',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/4/42/Gojira_magma_artwork.jpg'
  },
  {
    name: 'Bleed',
    artist: 'Meshuggah',
    albumArt: 'https://images-na.ssl-images-amazon.com/images/I/41531xeuu2L.jpg'
  },
  {
    name: 'Ruin',
    artist: 'Lamb Of God',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Lamb_of_God_-_Wrath.JPG/220px-Lamb_of_God_-_Wrath.JPG'
  },
  {
    name: 'White Iverson',
    artist: 'Post Malone',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg'
  },
  {
    name: 'White Iverson',
    artist: 'Post Malone',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg'
  },
  {
    name: 'White Iverson',
    artist: 'Post Malone',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg'
  },
  {
    name: 'White Iverson',
    artist: 'Post Malone',
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/7/72/Stoneyalbum.jpg'
  },
];


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 2000 : -2000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: 0
    };
  }
};

function Song({ song, ...restProps }) {
  const { name, artist, albumArt } = song;
  return <AnimatePresence>
    <motion.li
      layout
      className="flex flex-col"
      // initial={false}
      initial={{ x: 600 }}
      animate={{ x: 0, }}
      exit={{ x: -600, }}
      transition={{
        duration: .5,
        ease: 'easeOut'
      }}
      {...restProps}
    >
      <img src={albumArt} alt={name} className="rounded-lg shadow-lg" />
      <div className="text-sm mt-2 leading-tight">{name}</div>
      <div className="text-xs text-gray-300">{artist}</div>
    </motion.li>
  </AnimatePresence>
}

// function Song({ song, ...restProps }) {
//   const { name, artist, albumArt } = song;
//   return <AnimatePresence>
//     <motion.li
//       layout
//       className="flex flex-col"
//       // initial={false}
//       initial={{ x: 600 }}
//       animate={{ x: 0, }}
//       exit={{ x: -600, }}
//       transition={{
//         duration: .5,
//         ease: 'easeOut'
//       }}
//       {...restProps}
//     >
//       <img src={albumArt} alt={name} className="rounded-lg shadow-lg" />
//       <div className="text-sm mt-2 leading-tight">{name}</div>
//       <div className="text-xs text-gray-300">{artist}</div>
//     </motion.li>
//   </AnimatePresence>
// }


const useSongs = (songsList, count) => {
  const noOfSongs = songsList.length;
  const noOfPages = Math.ceil(noOfSongs / count);
  const [pageNo, setPageNo] = React.useState(1);
  // const [songs, setSongs] = React.useState([]);
  const [songs, setSongs] = React.useState(() => {
    let startIndex = (pageNo - 1) * count;
    return songsList.slice(startIndex, startIndex + count);
  });

  React.useEffect(() => {
    let startIndex = (pageNo - 1) * count;
    setSongs(songsList.slice(startIndex, startIndex + count))
  }, [count, pageNo, songsList]);

  const nextPage = React.useCallback(() => setPageNo(pageNo + 1), [pageNo]);
  const previousPage = React.useCallback(() => setPageNo(pageNo - 1), [pageNo]);

  const hasNextPage = pageNo < noOfPages;
  const hasPrevPage = pageNo > 1;

  return { songs, hasPrevPage, hasNextPage, nextPage, previousPage, pageNo }


}

function Spotify() {
  const { songs, hasPrevPage, hasNextPage, nextPage, previousPage, pageNo } = useSongs(SONGS, 6);
  console.log('count: ', SONGS.length)
  console.log('shubham: ', { pageNo, songs, hasPrevPage, hasNextPage, });


  return (
    <React.Fragment>
      <div className="new-spotify min-h-screen bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-700 backdrop-filter blur-md text-white px-12 py-8">
        {/* <div className="absolute top-0 left-0 h-screen w-screen bg-gradient-to-bl from-green-400 via-red-400 to-blue-500 filter blur-md"></div> */}

        <div className="overflow-x-hidden">
          <div className="flex items-end justify-between my-4">
            <span>Favorites</span>
            <div className="grid grid-flow-col gap-x-2">
              <Button disabled={!hasPrevPage} onClick={hasPrevPage ? previousPage : undefined}>
                <ChevLeft />
              </Button>
              <Button disabled={!hasNextPage} onClick={hasNextPage ? nextPage : undefined}>
                <ChevRight />
              </Button>
            </div>
          </div>
          <ul className="grid grid-rows-1 grid-cols-6 gap-5">
            <AnimateSharedLayout>
              {/* <AnimatePresence> */}
              {songs.map((song, index) => <Song song={song} key={`${song.name}_${index}`} />)}
              {/* </AnimatePresence> */}
            </AnimateSharedLayout>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}


const Button = ({ children, disabled, ...restProps }) => {

  return <button className="bg-gray-400 bg-opacity-20 text-white rounded-full focus:outline-none p-1 cursor-pointer hover:bg-opacity-50 transition-colors" {...restProps}>
    {children}
  </button>
}


const ChevRight = props => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
const ChevLeft = props => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>

export default Spotify;
