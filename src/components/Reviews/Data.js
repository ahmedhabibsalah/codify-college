import { Rating } from 'react-simple-star-rating'

const reviews = [
    {
        id:0,
        rate: <Rating initialValue={4.6} readonly={true}	 />,
        value:'4.6/5 Rating',
        logo:'./images/switchup.png'
    },
    {
        id:1,
        rate: <Rating initialValue={4.7} readonly={true}/>,
        value:'4.7/5 Rating',
        logo:'./images/facebook.png'
    },
    {
        id:2,
        rate: <Rating initialValue={4.8} readonly={true}/>,
        value:'4.8/5 Rating',
        logo:'./images/google.png'
    },
    {
        id:3,
        rate: <Rating initialValue={4} readonly={true}/>,
        value:'4/5 Rating',
        logo:'./images/trustpilot.jpg'
    },
]

export default reviews;