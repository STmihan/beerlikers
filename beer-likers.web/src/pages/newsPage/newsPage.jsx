import React from 'react';

const NewsPage = () => {
    return (
        <main>
            < article>
                < h2> Новости
                    Партии < /h2>
                <p>На этой странице вы можете ознакомиться с последними новостями в жизни партии</p>

                <section className="grid">
                    <article className="grid-item">
                        <div className="image">
                            <img src="../../../assets/pivo3.webp"/>
                        </div>
                        <div className="info">
                            <h2>Прошел 54й съезд Партии любителей пива</h2>
                            <div className="info-text">
                                <p>В ходе съезда члены партии обсудили курс на дальнейшее развитие влияния партии в
                                    Государственной
                                    думе, а также провели прения касательно лучшего сорта пива</p>
                            </div>
                        </div>
                    </article>

                    <article className="grid-item">
                        <div className="image">
                            <img src="../../../assets/pivo2.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Внимание, Розыгрыш!</h2>
                            <div className="info-text">
                                <p>Партия любителей пива, при поддержке пивоварни «Greater Bash 17%», проводит розыгрыш
                                    30 литров
                                    живого пива между всеми, подавшими зявку на вступление в партию до 30.01.2023,
                                    торопись
                                    учавствовать в розыгрыше! </p>
                            </div>
                        </div>
                    </article>

                    <article className="grid-item">
                        <div className="image">
                            <img src="../../../assets/pivo4.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Конкурс «Лучший пивовар»</h2>
                            <div className="info-text">
                                <p>Партия любителей пива объявляет конкурс за звание лучшего пивовара среди членов
                                    партии.
                                    Приглашаем всех желающих провести дегустацию пива и выбрать лучший сорт!</p>
                                <p>Адрес проведения конкурса: г. Москва, ул. Пушкина, д. Колотушкина</p>
                            </div>
                        </div>
                    </article>
                    <article className="grid-item">
                        <div className="image">
                            <img src="../../../assets/pivo5.jpg"/>
                        </div>
                        <div className="info">
                            <h2>Быть любителем может каждый!</h2>
                            <div className="info-text">
                                <p>Напоминаем, стать членом Партии любителей пива может любой желающий, руководство
                                    партии всегда
                                    отстаивает право каждого человека пить пиво, в прочем как и право его не пить</p>

                            </div>
                        </div>
                    </article>
                </section>
            </article>
        </main>
    );
};

export default NewsPage;
