export default function ProjectTwo() {
    const fbGif = `${process.env.PUBLIC_URL}/Gifs/facebook-reactions-recording.gif`;
    const fbGif2 = `${process.env.PUBLIC_URL}/Gifs/facebook-reactions-recording2.gif`;
    return (
        <div className="pt-5 pb-5">

            <p className="mt-2 text-xl ml-3 mr-10 mb-10">This is a project from Teamtreehouse that I added React to. This was
                originally a vanilla HTML and CSS pproject that involves a button group
                to appear on a hover state. I thought this was a great project to add JavaScript to,
                so with using React UseState hook I was able to get the emojis to render on click.
            </p>
            <div className="flex justify-center ">
                <img src={fbGif2} alt="" />
            </div>

        </div>
    );
}

// className="justify-start"