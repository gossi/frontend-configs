import { ability } from 'ember-ability';
export const canEdit = ability((post, user)=>{
    return post.author === user || user.admin;
});

//# sourceMappingURL=post.js.map