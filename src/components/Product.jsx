import speaker1 from '../assets/images/speaker-1.png'
import speaker2 from '../assets/images/speaker-2.png'
import speaker3 from '../assets/images/speaker-3.png'
import speaker4 from '../assets/images/speaker-4.png'
import speaker5 from '../assets/images/speaker-5.png'
import speaker6 from '../assets/images/speaker-6.png'

import headset1 from '../assets/images/head-set-1.png'
import headset2 from '../assets/images/head-set-2.png'
import headset3 from '../assets/images/head-set-3.png'
import headset4 from '../assets/images/head-set-4.png'
import headset5 from '../assets/images/head-set-5.png'
import headset6 from '../assets/images/head-set-6.png'

import series1 from '../assets/images/series-1.png'
import series2 from '../assets/images/series-2.png'
import series3 from '../assets/images/series-3.png'
import series4 from '../assets/images/series-4.png'
import series5 from '../assets/images/series-5.png'

import camera1 from '../assets/images/camera-1.png'
import camera2 from '../assets/images/camera-2.png'
import camera3 from '../assets/images/camera-3.png'
import camera4 from '../assets/images/camera-4.png'

import camcoder1 from '../assets/images/camcoder-1.png'
import camcoder2 from '../assets/images/camcoder-2.png'
import camcoder3 from '../assets/images/camcoder-3.png'
import camcoder4 from '../assets/images/camcoder-4.png'

// import shirt1 from '../assets/images/white-shirt.png'
// import shirt2 from '../assets/images/orange-shirt.png'
// import shirt3 from '../assets/images/long-hand-shirt.png'
// import shirt4 from '../assets/images/black-shirt.png'

// import shoe1 from '../assets/images/soccer-boot.png'
// import shoe2 from '../assets/images/soccer-boot2.png'
// import shoe3 from '../assets/images/shoe.png'
// import shoe4 from '../assets/images/shoe2.png'
// import sandal from '../assets/images/sandal.png'
// import sandal2 from '../assets/images/sandal2.png'
// import pam from '../assets/images/pam.png'

// import jeans1 from '../assets/images/tattered-jeans.png'
// import jeans2 from '../assets/images/jeans.png'
// import jeans3 from '../assets/images/jeans2.png'

let AllProducts = [
    // { id: '26', type: 'wear', category: 'cloth', image: shirt2, name: 'orange-shirt', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '1', category: 'headphones', image: headset1, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '2', type: 'gadget', category: 'speaker', image: speaker1, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '4', type: 'gadget', category: 'camcoder', image: camcoder1, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '5', type: 'gadget', category: 'series', image: series1, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '6', type: 'gadget', category: 'series', image: series2, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '7', type: 'gadget', category: 'camcoder', image: camcoder2, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    { id: '8', type: 'gadget', category: 'speaker', image: speaker2, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '9', type: 'gadget', category: 'speaker', image: speaker3, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '10', type: 'gadget', category: 'speaker', image: speaker4, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '11', type: 'gadget', category: 'speaker', image: speaker5, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '12', type: 'gadget', category: 'speaker', image: speaker6, name: 'speaker', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    { id: '13', type: 'gadget', category: 'headphone', image: headset2, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '14', type: 'gadget', category: 'headphone', image: headset3, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '15', type: 'gadget', category: 'headphone', image: headset4, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '16', type: 'gadget', category: 'headphone', image: headset5, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '17', type: 'gadget', category: 'headphone', image: headset6, name: 'headphones', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    { id: '18', category: 'series', image: series3, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '19', type: 'gadget', category: 'series', image: series4, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '20', type: 'gadget', category: 'series', image: series5, name: 'series', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    { id: '21', type: 'gadget', category: 'camera', image: camera1, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '22', type: 'gadget', category: 'camera', image: camera2, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '23', type: 'gadget', category: 'camera', image: camera3, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '24', type: 'gadget', category: 'camera', image: camera4, name: 'camera', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '25', type: 'gadget', category: 'camcoder', image: camcoder3, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    { id: '26', type: 'gadget', category: 'camcoder', image: camcoder4, name: 'camcoder', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    // { id: '27', type: 'wear', category: 'cloth', image: shirt1, name: 'white-shirt', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '28', type: 'wear', category: 'cloth', image: shirt3, name: 'long-hand-shirt', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '29', type: 'wear', category: 'cloth', image: shirt4, name: 'black-shirt', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    // { id: '30', type: 'wear', category: 'shoe', image: shoe3, name: 'shoe', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '31', type: 'wear', category: 'shoe', image: shoe1, name: 'soccer boot', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '32', type: 'wear', category: 'shoe', image: shoe2, name: 'soccer boot', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '33', type: 'wear', category: 'shoe', image: shoe4, name: 'shoe', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },

    // { id: '34', type: 'wear', category: 'sandal', image: sandal, name: 'sandal', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '35', type: 'wear', category: 'sandal', image: sandal2, name: 'sandal', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '36', type: 'wear', category: 'sandal', image: pam, name: 'pam', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },


    // { id: '37', type: 'wear', category: 'jeans', image: jeans2, name: 'jeans', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '38', type: 'wear', category: 'jeans', image: jeans3, name: 'jeans', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
    // { id: '39', type: 'wear', category: 'jeans', image: jeans1, name: 'tattered jeans', info: 'sit amet consectetur adipisicing elit. Officia fuga rem asperiores ab repellat autem sit a itaque veritatis deleniti.', price: 200 },
]

export default AllProducts