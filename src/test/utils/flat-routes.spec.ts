import { flatRoutes } from '../../utils/flat-routes.util';
describe('FlatRoutes', () => {
  const f = flatRoutes;
  test('it should flat all Routes to endless, and we could also ommit the path', () => {
    const routes = [
      {
        path: '/parent',
        module: 'ParentModule',
        childrens: [
          {
            path: '/child',
            module: 'ChildModule',
            childrens: [
              { path: '/child2', module: 'ChildModule2' },
              {
                path: '/parentchild',
                module: 'ParentChildModule',
                childrens: [
                  {
                    path: '/childchild',
                    module: 'ChildChildModule',
                    childrens: [{ path: '/child2child', module: 'ChildChildModule2' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      { path: '/v1', childrens: ['AuthModule', 'CatsModule', 'DogsModule'] },
      { path: '/v2', childrens: ['AuthModule2', 'CatsModule2'] },
    ];
    const expectedRoutes = [
      { path: '/parent', module: 'ParentModule' },
      { path: '/parent/child', module: 'ChildModule' },
      { path: '/parent/child/child2', module: 'ChildModule2' },
      { path: '/parent/child/parentchild', module: 'ParentChildModule' },
      { path: '/parent/child/parentchild/childchild', module: 'ChildChildModule' },
      { path: '/parent/child/parentchild/childchild/child2child', module: 'ChildChildModule2' },
      { path: '/v1', module: 'AuthModule' },
      { path: '/v1', module: 'CatsModule' },
      { path: '/v1', module: 'DogsModule' },
      { path: '/v2', module: 'AuthModule2' },
      { path: '/v2', module: 'CatsModule2' },
    ];
    expect(f(routes)).toEqual(expectedRoutes);
  });
});
