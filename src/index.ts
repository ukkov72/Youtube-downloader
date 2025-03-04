import ytdl from 'youtube-dl-exec';
import * as path from 'path';

async function downloadVideo(url: string) {
    try {
        console.log(`Starting download for: ${url}`);

        const outputPath = path.join(__dirname, 'downloaded_video.mp4');

        await ytdl.exec(url, {
            output: outputPath,
            format: 'bestvideo+bestaudio/best',
            quiet: false,
        });

        console.log(`Download completed! Video saved at: ${outputPath}`);
    } catch (error) {
        console.error('Error downloading video:', error);
    }
}

// Run the download function
async function main() {
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Change this URL as needed
    await downloadVideo(videoUrl);
}

main();
