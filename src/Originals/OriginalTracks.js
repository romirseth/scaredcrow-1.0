// audio files
import dutchy from '../_audio/FlyingDutchman.wav';
import wicb from '../_audio/When I Come Back (AW) - 09Sep25.mp3'
import corp from '../_audio/Corp Throwaway - 10Sep25.mp3';
import fringe from '../_audio/On the Fringe (Build Back) - 30Apr25.mp3';

// audio thumbnails
import dutchyTN from '../_images/Dutchman_Cropped.png';
import wicbTN from '../_images/Matt hehe.JPG';
import fringeTN from '../_images/Romir dope pt 2.JPG';
import corpTN from '../_images/Aiden flow.JPG';

export const tracks = [
    {
        id: 0,
        title: 'Flying Dutchman',
        src: dutchy,
        thumbnail: dutchyTN,
    },
    {
        id: 1,
        title: 'Corporate Throwaway (Demo)',
        src: corp,
        thumbnail: corpTN,
    },
    {
        id: 2,
        title: 'When I Come Back (Demo)',
        src: wicb,
        thumbnail: wicbTN,
    },
    {
        id: 3,
        title: 'On The Fringe (Demo)',
        src: fringe,
        thumbnail: fringeTN,
    },
];