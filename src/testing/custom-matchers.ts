const _global = <any>(typeof window === 'undefined' ? global : window);

export const expect: (actual: any) => NgMatchers = <any> _global.expect;

export interface NgMatchers extends jasmine.Matchers {
  toHaveMap(expected: {[k: string]: string}): boolean;
}

export const CUSTOM_MATCHERS: jasmine.CustomMatcherFactories = {
  toHaveMap: () => {
    return {
      compare: (actual: {[k: string]: string}, map: {[k: string]: string}) => {
        let allPassed: boolean;
        allPassed = Object.keys(map).length !== 0;
        Object.keys(map).forEach(key => {
          allPassed = allPassed && (actual[key] === map[key]);
        });

        return {
          pass: allPassed,
          get message() {
            return `
              Expected ${JSON.stringify(actual)} ${!allPassed ? ' ' : 'not '} to contain the
              "${JSON.stringify(map)}"
            `;
          }
        };
      }
    };
  }
};
