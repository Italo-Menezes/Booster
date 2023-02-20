import { item } from './items';
import { point } from './points';
import { points_items } from './points_items';

item.hasMany(points_items, { foreignKey: 'item_id' });
points_items.belongsTo(item, { foreignKey: 'item_id' });
point.hasMany(points_items, { foreignKey: 'point_id' });
points_items.belongsTo(point, { foreignKey: 'point_id' });







    


export { item, point, points_items };