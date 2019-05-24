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
                <img className="mySlides" alt="pic3" src="https://static1.squarespace.com/static/5844b5fa1b631b1c50a87a21/t/598276b64c0dbfe56e201950/1556534623920/" />
                <img className="mySlides" alt="pic4" src="images/storefront.jpg" />
            </div>
        )
    }
}

export default Scroller;