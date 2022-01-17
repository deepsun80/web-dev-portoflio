import Hero from 'components/Hero';
import Projects from 'components/Projects';
import Skills from 'components/Skills';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Index = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={1}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={2} factor={1.5} style={{ backgroundColor: '#455a64' }} />

      <ParallaxLayer offset={1} speed={1}>
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1}>
        <Skills />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Index;