
  const { register, navigate } = require('../../../../../scripts/e2e');

  describe('searchbar/standalone', () => {

    register('should init', navigate('http://localhost:3333/src/components/searchbar/test/standalone'));

  });
  