import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import Landing from "./view/landing";
// locale
import zhLocale from './locale/zh-CN.json';
// style
import './style/index.less';

const userLang = navigator.language || '';
const language = userLang.toLowerCase().substr(0, 2);
let locale = 'zh';
let messages = zhLocale;
if (language === 'zh') {
    locale = 'zh';
    messages = zhLocale;
}

class App extends Component {
    render () {
        return (
            <IntlProvider locale={locale} messages={messages}>
                <Landing/>
            </IntlProvider>
        );
    }
}

export default App;