import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:<%= dasherizedModuleName %>', '<%= friendlyTestDescription %>', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let toriiAdapter = this.subject();
  assert.ok(toriiAdapter);
});
