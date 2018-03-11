let audioFiles = [
    {
      src: "/heyJude.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    },
    {
      src: "/uptownFunk.mp3",
      title: "Uptown Funk ft. Bruno Mars",
      artist: "Mark Ronson"
    },
    {
      src: "/rollingInTheDeep.mp3",
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
  audioFiles,
  rearrangedPlayer,
  picRearrange,
  rearrangedPlayerTwo,
  picOverlay
};
