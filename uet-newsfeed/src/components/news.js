import React, { Component } from 'react';

class News extends Component {
    readnews(e){
       var thumb=e.currentTarget.querySelector(".news-img");
       console.log(thumb);
    //    thumb.style.cssText=`
    //        height:200px;
    //    `;
      }
    render() {
        return (
            <div  onClick={this.readnews} className="news">
                <div className="news-img">
                </div>
                <div className="description">
                <h3>Đạt giải bạn đẹp trai nhất UET</h3>
                <p>Vừa qua bạn Trần Mạnh Cường K62-C-CLC nhận được giải thưởng nam thần UET</p>
                </div>
            </div>
        )
    }
}
export default News;