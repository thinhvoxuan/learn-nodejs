import { observable, action, computed } from 'mobx'
import {
  serializable, primitive, identifier, createModelSchema, list, object
} from "serializr"

class CandidateModel {

  @serializable(identifier()) id = 0

  @serializable  
  @observable
  first_name = ''

  @serializable  
  @observable
  last_name = ''

  @serializable
  @observable
  short_name = ''

  @serializable
  @observable
  is_new = false

  @serializable
  @observable
  avatar = ''

  @serializable
  @observable
  email = ''

  @serializable
  @observable
  phone = ''

  @serializable
  @observable
  birth_year

  @serializable
  @observable
  gender = 'Nam'

  @serializable
  @observable
  source = ''

  @serializable
  @observable
  assessment = ''

  @serializable
  @observable
  working_list = []
  
  // @serializable
  // @observable
  // education_list = []

  // @serializable  @observable language_list= []

  @serializables
  @observable
  skills = ''

  @serializable
  @observable
  latest_position = ''

  @serializable
  @observable 
  latest_company = ''

  @serializable  
  @observable 
  referrer

  @serializable  
  @observable year_of_exp

  @serializable  
  @observable 
  highest_education

  @serializable  
  @observable 
  created_at

  @serializable  
  @observable 
  updated_at

  @serializable  
  @observable 
  is_referred

  @serializable  
  @observable 
  note = ''

  @serializable  
  @observable 
  state

}

export default CandidateModel