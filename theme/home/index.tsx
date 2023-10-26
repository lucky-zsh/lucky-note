import $style from './index.scss';

import { KIcon } from '@/ui/index';
const HomeLayout = function () {
    return (
        <div className={$style.home_wrap}>
            <div className={$style.home_intro}>
                <div className={$style.home_intro_content}>
                    <h3>大前端 Lucky Note</h3>
                    <p>
                        聚焦大前端，深度挖掘浏览器，网络，JavaScript,Node,设计模式，数据结构，算法，工程化等相关知识，不断的学习和沉淀，提升自身的同时也助理你的成长。
                    </p>
                    <KIcon icon='github'></KIcon>
                    <div></div>
                </div>
                <div className={$style.home_intro_image}>
                    {/* <IntroImg
                        style={{ width: '400px', height: 'auto' }}
                    ></IntroImg> */}
                </div>
            </div>
        </div>
    );
};
export default HomeLayout;
