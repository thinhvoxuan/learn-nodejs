import {
    mapping
} from '../src/mappingUser';

it('testing single member', () => {
   let listMember = ['user-01'];
   let listToken = [
       {
           "token-01" : {
               userId: 'user-01'
           }
       },
       {
           "token-02" : {
               userId: 'user-02'
           }
       },
       {
           "token-03" : {
               userId: 'user-03'
           }
       }
   ]

   let result = mapping(listMember, listToken);
   expect(result).toEqual([ 'token-01' ]);
});

it('testing single member', () => {
   let listMember = ['user-01'];
   let listToken = [
       {
           "token-01" : {
               userId: 'user-01'
           }
       },
       {
           "token-02" : {
               userId: 'user-02'
           }
       },
       {
           "token-03" : {
               userId: 'user-03'
           }
       }
   ]

   let result = mapping(listMember, listToken);
   expect(result).toEqual([ 'token-01' ]);
});