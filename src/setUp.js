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
rearrangedPlayer = [
  {
    className: "tier-top",
    style: { margin: "0.3rem" },
    innerComponents: [
      {
        type: "play",
        style: { width: "fit-content" }
      },
      {
        type: "rewind",
        style: { width: "fit-content" }
      },
      {
        type: "forward",
        style: { width: "fit-content" }
      },
      {
        type: "volume"
      }
    ]
  },
  {
    className: "tier-bottom",
    style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
    innerComponents: [
      {
        type: "time",
        style: { width: "fit-content" }
      },
      {
        type: "seek"
      }
    ]
  }
];

export {
  audioFiles,
  rearrangedPlayer
}