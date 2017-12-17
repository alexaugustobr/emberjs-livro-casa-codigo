
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        telefones: {
            serialize: 'records',
            deserialize: 'ids'
        }
    }
});