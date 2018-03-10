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
      style: { padding: "5px 0" },
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
  ];

export { audioFiles, rearrangedPlayer };
