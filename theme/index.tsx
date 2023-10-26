import Theme from 'rspress/theme';
import HomeLayout from './home';
const importAll = (resolve: any) => {
    resolve.keys().forEach((key: string) => (key = resolve(key)));
};
importAll(require.context('./', true, /assets\/icons\/.*\.svg$/));

export default {
    ...Theme,
    HomeLayout
};

export * from 'rspress/theme';
