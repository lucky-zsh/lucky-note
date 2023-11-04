import $style from "./index.scss"
const ButtonStyle = function () {
    return (
        <div className={$style.button_native}>
            <button type="button">我是原生按钮</button>
            <button type="button">我是禁用部分样式按钮</button>
            <button type="button">覆盖样式按钮</button>
            <button type="button">加入效果</button>
        </div>
    )
};

export default ButtonStyle;
