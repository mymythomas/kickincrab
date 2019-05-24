import React from 'react';

class Scroller extends React.Component {
    state = {
        scrollerIndex: 0
    }

    carousel = () => {
        var i;
        var index = this.state.scrollerIndex;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        this.setState({
            scrollerIndex: index + 1
        })
        if (index >= x.length-1) {
            this.setState({
                scrollerIndex: 0
            })
        }
        x[index].style.display = "block";
        setTimeout(this.carousel, 3000);
    }

    componentDidMount() {
        this.carousel();
    }

    render() {
        return (
            <div className="scroller">
                <img className="mySlides" alt="pic1" src="images/food.jpeg" />
                <img className="mySlides" alt="pic2" src="images/crawfishHeart.jpg" />
                <img className="mySlides" alt="pic3" src="images/dinnerphoto.jpg" />
                <img className="mySlides" alt="pic4" src="images/storefront.jpg" />
            </div>
        )
    }
}

export default Scroller;