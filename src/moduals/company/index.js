import React from 'react';
import Header from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import CompanyHerobanner from './companyherobanner';
import CompanyStory from './companystory';
import CompanyAchievements from './companyachivements';
import CompanyQHSE from './companyQHSE';
import CompanyQHSECareer from './companyQHSEcareer';

export default function Company() {
    return (
        <div>
            <Header />
            <CompanyHerobanner />
            <CompanyStory />
            <CompanyAchievements />
            <CompanyQHSE />
            <CompanyQHSECareer />
            <Footer />
        </div>
    )
}
