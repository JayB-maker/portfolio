export interface INavigationSectionProps {
    navState?: any;
    setNavState?: any;
    navs?: Array<object>;
    route?: string;
    menu?:string;
}

export interface IExperienceSectionProps {
    experienceDetails?: Array<object>;
    track?: string;
    skills?: Array<object>;
    type?: string;
    level?: string;
}

export interface IServiceSectionProps {
    serviceDetails?: Array<object>;
    track?: string;
    details?: Array<string>;
}