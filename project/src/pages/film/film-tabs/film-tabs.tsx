import {useState, useCallback } from 'react';
import {TabsName} from '../../../const';
import {FilmTypes, CommentProps} from '../../../types/types';
import {FilmDetails}  from '../film-details/film-details';
import {FilmOverview} from '../film-overview/film-overview';
import {FilmReview} from '../film-review/film-review';


type FilmTabsProps = {
  film: FilmTypes;
  reviews: CommentProps[];
}


function FilmTabs ({film, reviews}: FilmTabsProps) {
  const [activeTab, setActiveTab] = useState(TabsName.OVERVIEW);
  const tabs = Object.values(TabsName);

  const handleTabClick = useCallback((tabName) => (evt: React.MouseEvent) => {
    evt.preventDefault();
    setActiveTab(tabName);
  }, [setActiveTab]);

  const getInfoByActiveTab = (tab: string) => {
    switch (tab) {
      case TabsName.OVERVIEW:
        return (
          <FilmOverview film={film}/>
        );
      case TabsName.REVIEWS:
        return (
          <FilmReview reviews = {reviews}/>
        );
      case TabsName.DETAILS:
        return (
          <FilmDetails film={film}/>
        );
      default:
        return (
          <FilmOverview film={film}/>
        );
    }
  };

  return (
    <>
      <nav className={'film-nav film-card__nav'}>
        <ul className="film-nav__list">
          {
            tabs.map((tab) => (
              <li className={
                tab === activeTab
                  ? 'film-nav__item film-nav__item--active'
                  : 'film-nav__item'
              }
              key={tab}
              >

                <a href='/#' className="film-nav__link"
                  data-filmnav={tab}
                  onClick={handleTabClick(tab)}
                >
                  {tab}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      {getInfoByActiveTab(activeTab)}
    </>
  );
}

export {FilmTabs};
