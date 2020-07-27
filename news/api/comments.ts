import fetch from 'node-fetch';
import { Comment, EntityId, Person } from '../shared/types';
import { config } from './config';

export async function fetchComments(postId: EntityId): Promise<Comment[]> {
  const res = await fetch(`${config.baseUrl}/comments/${postId}`);
  return await res.json();
}
