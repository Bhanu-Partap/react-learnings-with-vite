
function Test() {
  function ClickBait() {
    alert("Clickbited ")
  }
    <div>
      <h1> Hello from Test component</h1>
      <button onClick={ClickBait}> Click me</button>
    </div>
}

export default Test