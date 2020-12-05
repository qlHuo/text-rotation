import React, { PureComponent } from 'react';
import './index.css';


class TextRotation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // 总宽度
      widthList: 0,
    }
  }

  componentDidMount () {
    setTimeout(() => {
      let textEle = document.getElementsByTagName('p');

      let width = 0;
      // 获取每一项的宽度，并存到
      for (let i = 0; i < textEle.length; i++) {
        width += textEle[i].clientWidth
      }
      this.setState({
        widthList: width
      })

      this.textMove()
    }, 0)
  }

  textMove () {
    let { widthList } = this.state;
    let marquee = document.getElementById('marquee');
    let distance = 0;
    setInterval(() => {
      distance = distance - 1;
      // console.log(distance, widthList);
      // 如果滚动的距离超出了所有子元素的宽度，那就从头开始
      if (-distance >= widthList) {
        distance = 200;
      }
      // 利用 transform 属性实现移动的效果
      marquee.style.transform = 'translateX(' + distance + 'px)';
    }, 50)
  }

  render () {
    return (
      <div className='text-ratation-container'>
        <div id='marquee'>
          {
            this.props.textList.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default TextRotation;