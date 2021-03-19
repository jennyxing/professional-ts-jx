import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '../../src/ui/components/Channel/Footer';

// // you can declare additional things here. it'll merge with what @types/react-test-renderer already provided.
// declare module 'react-test-renderer' {
//   interface TestRendererOptions {
//     company: string;
//   }
// }

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Footer channel={{ name: 'recruiting' }} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
