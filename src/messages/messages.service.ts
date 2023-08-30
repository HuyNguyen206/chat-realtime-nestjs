import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import {Message} from "./entities/message.entity";

@Injectable()
export class MessagesService {
  messages: Message[] = [{name: 'ben', text: 'hi'}]
  clientToUser = {}
  create(createMessageDto: CreateMessageDto) {
    this.messages.push(createMessageDto); //TODO: improve
    return createMessageDto
  }

  findAll() {
    return this.messages
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name

    return Object.values(this.clientToUser)
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId]
  }


}
