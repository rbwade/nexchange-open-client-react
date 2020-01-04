/* eslint rule disable"*/
import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import { I18n } from 'react-i18next';
import styles from './Team.scss';

const Team = () => (
  <I18n ns="translations">
    {t => (
      <div className={styles.container}>
        <div className="container">
          <div className={`${styles.row} row`}>
            <div className="col-xs-12">
              <h2 className="title">{t('about.teamtitle')}</h2>
            </div>

            
          </div>
        </div>
      </div>
    )}
  </I18n>
);

export default Team;
/* eslint rule disable"*/
