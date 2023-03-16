import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>Copyright&nbsp;&copy;&nbsp;2022&nbsp;-&nbsp;2023&nbsp;<Link to='https://www.yimoorua.top/' text='YimooRua' />&nbsp;|&nbsp;Powered by&nbsp;<Link to='https://github.com/yb/uptime-status' text='uptime-status' />&nbsp;{Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
