import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '易于使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        设计从地面开始就很容易安装和用来让你的网站快速启动和运行。
      </>
    ),
  },
  {
    title: '关注重要的事情',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        让你专注于你的文档，而我们来做杂事。去继续并将您的文档移动到<code>docs</code>目录
      </>
    ),
  },
  {
    title: 'React支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过重用React扩展或自定义您的网站布局。可以
        在重复使用相同的页眉和页脚时进行扩展。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
