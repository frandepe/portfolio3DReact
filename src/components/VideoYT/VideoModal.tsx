import {
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
} from "@/components/ui/video-modal";
import Button from "../Button/Button";
import VideoComponent from "./VideoYT";

function VideoModalDemo() {
  return (
    <div className="relative justify-center">
      <VideoModal>
        <VideoModalTrigger>
          <Button title="Video" variant="default" />
        </VideoModalTrigger>
        <VideoModalContent>
          <VideoModalTitle>Me presento</VideoModalTitle>
          <VideoModalDescription>
            Un poco sobre mí y lo que hago.
          </VideoModalDescription>
          <div className="flex justify-center">
            <VideoComponent />
            {/* <VideoPlayer>
              <VideoPreview>
                <img
                  src="https://cdn.dribbble.com/userupload/4145843/file/original-c7a2c9a768450460259f232259d103d2.png?resize=1600x1200"
                  alt="Video preview"
                />
              </VideoPreview>
              <VideoPlayButton>
                <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                  <BsPlayCircle className="size-20 stroke-1 text-white" />
                </button>
              </VideoPlayButton>
              <iframe
                className="size-full"
                src="https://cdn.magicui.design/globe.mp4"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </VideoPlayer> */}
          </div>
        </VideoModalContent>
      </VideoModal>
    </div>
  );
}

export { VideoModalDemo };
