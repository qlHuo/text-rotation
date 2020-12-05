import TextRatation from './text-rotation/index'

function App (props) {

  props = {
    textList: [
      '这是第一段文字',
      '这是第二段文字',
      '这是第三段文字'
    ]
  }

  return (
    <>
      <TextRatation textList={props.textList} />
    </>
  );
}

export default App;
