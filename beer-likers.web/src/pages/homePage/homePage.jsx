import React from 'react';

const HomePage = () => {
    return (
        <main>
            <article>
                <p className="aligncenter">
                    <img src="assets/bg.png" width="1200" height="500" alt=""/>
                </p>
                <h2>Партия любителй пива - ЗА СВОБОДУ ВЫБОРА</h2>
                <p>Партия любителей пива — политическая партия в Российской Федерации, зарегистрированная Минюстом РФ 9
                    августа 1994 года (Рег. N 2365)</p>
                <h2>Последние новости из жизни Партии</h2>
                <section className="grid">
                    <article className="grid-item">
                        <div className="image">
                            <img src="assets/pivo3.webp"/>
                        </div>
                        <div className="info">
                            <h2>Прошел 54й съезд Партии любителей пива</h2>
                            <div className="info-text">
                                <p>В ходе съезда члены партии обсудили курс на дальнейшее развитие влияния партии в
                                    Государственной думе, а также провели прения касательно лучшего сорта пива</p>
                            </div>
                        </div>
                    </article>

                    <article className="grid-item">
                        <div className="image">
                            <img src="assets/pivo2.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Внимание, Розыгрыш!</h2>
                            <div className="info-text">
                                <p>Партия любителей пива, при поддержке пивоварни «Greater Bash 17%», проводит розыгрыш
                                    30 литров живого пива между всеми, подавшими зявку на вступление в партию до
                                    30.01.2023, торопись учавствовать в розыгрыше! </p>
                            </div>
                        </div>
                    </article>

                    <article className="grid-item">
                        <div className="image">
                            <img src="assets/pivo4.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Конкурс «Лучший пивовар»</h2>
                            <div className="info-text">
                                <p>Партия любителей пива объявляет конкурс за звание лучшего пивовара среди членов
                                    партии. Приглашаем всех желающих провести дегустацию пива и выбрать лучший сорт!</p>
                                <p>Адрес проведения конкурса: г. Москва, ул. Пушкина, д. Колотушкина</p>
                            </div>
                        </div>
                    </article>
                    <article className="grid-item">
                        <div className="image">
                            <img src="assets/pivo5.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Быть любителем может каждый!</h2>
                            <div className="info-text">
                                <p>Напоминаем, стать членом Партии любителей пива может любой желающий, руководство
                                    партии всегда отстаивает право каждого человека пить пиво, в прочем как и право его
                                    не пить</p>

                            </div>
                        </div>
                    </article>
                </section>
                <div className="kadupis-decung">
                    <h1>Наша команда</h1>
                    <div className="cumconevu">
                        <div className="volupavum">
                            <div className="vumkob-salovum">
                                <img src="assets/bristl.png" alt=""/>
                            </div>
                            <h3>iVanFromJapan</h3>
                            <p className="role">Генеральный секретарь</p>
                            <p>Самый главный человек в нашей партии.</p>
                            <p>Любитель пива.</p>
                            <p>Характер общительный.</p>
                            <p>Не женат</p>
                        </div>
                        <div className="volupavum">
                            <div className="vumkob-salovum">
                                <img src="assets/tusk.png" alt=""/>
                            </div>
                            <h3>NicoNicoDougaKolya</h3>
                            <p className="role">Заместитель генерального секретаря</p>
                            <p>Колян</p>
                            <p>Очень добрый и позитивный человек</p>
                            <p>Характер стабильно нестабильный</p>
                            <p>Не женат</p></div>
                        <div className="volupavum">
                            <div className="vumkob-salovum">
                                <img src="assets/tinker.png" alt=""/>
                            </div>
                            <h3>Dyadya Fedor</h3>
                            <p className="role">Игрок на тинкере</p>
                            <p>Любитель поиграть на тинкере под пиво</p>
                            <p>Хекс Дагон Подсечка</p>
                            <p>Гроб Могила Свечка</p>
                            <p>Не женат</p>
                        </div>
                    </div>
                </div>
            </article>

        </main>
    );
};

export default HomePage;
