import $style from './index.scss';
import IntroImg from './assets/Intro-img.svg';
import ThemeIcon from '@/theme/components/icon';
import GithubIcon from '@/assets/icons/github.svg';
import WxaIcon from '@/assets/icons/wxa.svg';
import NugIcon from '@/assets/icons/nug.svg';
import CsvgIcon from '@/assets/icons/csdn.svg';
// import { NoteList } from './constant';
// import { KCol, KRow } from '@/ui/index';

// import { useNavigate } from 'rspress/runtime';
const HomeLayout = function () {
    const clickHandle = (type) => {
        console.log(type);
    };
    return (
        <div className={$style.home_wrap}>
            <div className={$style.home_intro}>
                <div className={$style.home_intro_content}>
                    <h3>大前端 Lucky Note</h3>
                    <p>
                        聚焦大前端，深度挖掘浏览器，网络，JavaScript,Node,设计模式，数据结构，算法，工程化等相关知识，不断的学习和沉淀，提升自身的同时也助理你的成长。
                    </p>

                    <div className={$style.home_intro_contact}>
                        <ThemeIcon
                            icon={GithubIcon}
                            size={28}
                            onClick={() => clickHandle('github')}
                        ></ThemeIcon>
                        <ThemeIcon
                            icon={WxaIcon}
                            size={28}
                            onClick={() => clickHandle('wx')}
                        ></ThemeIcon>
                        <ThemeIcon
                            icon={NugIcon}
                            size={28}
                            onClick={() => clickHandle('nug')}
                        ></ThemeIcon>
                        <ThemeIcon
                            icon={CsvgIcon}
                            size={28}
                            onClick={() => clickHandle('csdn')}
                        ></ThemeIcon>
                    </div>
                </div>
                <div className={$style.home_intro_image}>
                    <IntroImg
                        style={{ width: '400px', height: 'auto' }}
                    ></IntroImg>
                </div>
            </div>
            {/* <div className={$style.home_note}>
                {NoteList.map((item, index) => {
                    return (
                        <div
                            className={$style.home_note_item}
                            key={index}
                        >
                            <div className={$style.home_note_title}>
                                {item.title}
                            </div>
                            <KRow className={$style.home_note_list}>
                                {Array.isArray(item.children)
                                    ? item.children.map((unit, num) => {
                                          return (
                                              <KCol
                                                  className={
                                                      $style.home_note_card
                                                  }
                                                  key={`${index}-${num}`}
                                                  xs={2}
                                                  sm={4}
                                                  md={6}
                                                  lg={8}
                                                  xl={10}
                                                  xxl={8}
                                              >
                                                  <div
                                                      className={
                                                          $style.home_note_box
                                                      }
                                                  >
                                                      {unit.title}
                                                  </div>
                                              </KCol>
                                          );
                                      })
                                    : null}
                            </KRow>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
};
export default HomeLayout;
