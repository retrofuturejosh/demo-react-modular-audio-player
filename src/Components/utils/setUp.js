let rollingMP3 = "https://github.com/retrofuturejosh/demo-react-modular-audio-player/blob/master/public/rollingInTheDeep.mp3?raw=true",
  uptownFunkMP3 = "https://github.com/retrofuturejosh/demo-react-modular-audio-player/blob/master/public/uptownFunk.mp3?raw=true",
  heyJudeMP3 = "https://github.com/retrofuturejosh/demo-react-modular-audio-player/blob/master/public/heyJude.mp3?raw=true",
 audioFiles = [
    {
      src: heyJudeMP3,
      title: "Hey Jude",
      artist: "The Beatles"
    },
    {
      src: uptownFunkMP3,
      title: "Uptown Funk ft. Bruno Mars",
      artist: "Mark Ronson"
    },
    {
      src: rollingMP3,
      title: "Rolling In The Deep",
      artist: "Adele"
    }
  ],
  iconStyle = { width: "fit-content" },
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { padding: "5px 0" },
      innerComponents: [
        {
          type: "play",
          style: iconStyle
        },
        {
          type: "rewind",
          style: iconStyle
        },
        {
          type: "forward",
          style: iconStyle
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      innerComponents: [
        {
          type: "time",
          style: iconStyle
        },
        {
          type: "seek"
        }
      ]
    }
  ],
  picRearrange = [
    {
      className: "beatles",
      style: { cursor: "pointer" },
      innerComponents: [
        {
          type: "play",
          style: { width: "100%", justifyContent: "center" }
        }
      ]
    }
  ],
  rearrangedPlayerTwo = [
    {
      className: "top",
      style: { marginBottom: "0.2rem" },
      innerComponents: [
        {
          type: "name",
          style: { width: "58%" }
        },
        {
          type: "time",
          style: { justifyContent: "flex-end" }
        }
      ]
    },
    {
      className: "bottom",
      innerComponents: [
        {
          type: "play",
          style: { width: "12.5%", justifyContent: "flex-end" }
        },
        {
          type: "rewind",
          style: { width: "12.5%", justifyContent: "flex-end" }
        },
        {
          type: "forward",
          style: { width: "12.5%" }
        },
        {
          type: "loop",
          style: { width: "12.5%" }
        },
        {
          type: "volume",
          style: { width: "48%" }
        }
      ]
    }
  ],
  picOverlay = [
    {
      className: "adele",
      innerComponents: [
        {
          type: "play",
          style: {
            width: "100%",
            justifyContent: "center",
            filter: "invert(100%)",
            opacity: "0.4"
          }
        }
      ]
    }
  ];

export {
  heyJudeMP3,
  uptownFunkMP3,
  rollingMP3,
  audioFiles,
  rearrangedPlayer,
  picRearrange,
  rearrangedPlayerTwo,
  picOverlay
};
