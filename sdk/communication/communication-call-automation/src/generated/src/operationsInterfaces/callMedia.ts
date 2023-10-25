/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PlayRequest,
  CallMediaPlayOptionalParams,
  StartTranscriptionRequest,
  CallMediaStartTranscriptionOptionalParams,
  StopTranscriptionRequest,
  CallMediaStopTranscriptionOptionalParams,
  CallMediaCancelAllMediaOperationsOptionalParams,
  RecognizeRequest,
  CallMediaRecognizeOptionalParams,
  ContinuousDtmfRecognitionRequest,
  CallMediaStartContinuousDtmfRecognitionOptionalParams,
  CallMediaStopContinuousDtmfRecognitionOptionalParams,
  SendDtmfTonesRequest,
  CallMediaSendDtmfTonesOptionalParams,
  CallMediaSendDtmfTonesResponse,
  UpdateTranscriptionDataRequest,
  CallMediaUpdateTranscriptionDataOptionalParams,
  StartHoldMusicRequest,
  CallMediaStartHoldMusicOptionalParams,
  StopHoldMusicRequest,
  CallMediaStopHoldMusicOptionalParams
} from "../models";

/** Interface representing a CallMedia. */
export interface CallMedia {
  /**
   * Plays audio to participants in the call.
   * @param callConnectionId The call connection id.
   * @param playRequest play request payload.
   * @param options The options parameters.
   */
  play(
    callConnectionId: string,
    playRequest: PlayRequest,
    options?: CallMediaPlayOptionalParams
  ): Promise<void>;
  /**
   * Starts transcription in the call
   * @param callConnectionId The call connection id.
   * @param startTranscriptionRequest
   * @param options The options parameters.
   */
  startTranscription(
    callConnectionId: string,
    startTranscriptionRequest: StartTranscriptionRequest,
    options?: CallMediaStartTranscriptionOptionalParams
  ): Promise<void>;
  /**
   * Stops transcription in the call.
   * @param callConnectionId The call connection id.
   * @param stopTranscriptionRequest stop transcription request payload.
   * @param options The options parameters.
   */
  stopTranscription(
    callConnectionId: string,
    stopTranscriptionRequest: StopTranscriptionRequest,
    options?: CallMediaStopTranscriptionOptionalParams
  ): Promise<void>;
  /**
   * Cancel all media operations in a call.
   * @param callConnectionId The call connection id
   * @param options The options parameters.
   */
  cancelAllMediaOperations(
    callConnectionId: string,
    options?: CallMediaCancelAllMediaOperationsOptionalParams
  ): Promise<void>;
  /**
   * Recognize media from call.
   * @param callConnectionId The call connection id
   * @param recognizeRequest The media recognize request
   * @param options The options parameters.
   */
  recognize(
    callConnectionId: string,
    recognizeRequest: RecognizeRequest,
    options?: CallMediaRecognizeOptionalParams
  ): Promise<void>;
  /**
   * Start continuous Dtmf recognition by subscribing to tones.
   * @param callConnectionId The call connection id
   * @param continuousDtmfRecognitionRequest The continuous recognize request
   * @param options The options parameters.
   */
  startContinuousDtmfRecognition(
    callConnectionId: string,
    continuousDtmfRecognitionRequest: ContinuousDtmfRecognitionRequest,
    options?: CallMediaStartContinuousDtmfRecognitionOptionalParams
  ): Promise<void>;
  /**
   * Stop continuous Dtmf recognition by unsubscribing to tones.
   * @param callConnectionId The call connection id
   * @param continuousDtmfRecognitionRequest The continuous recognize request
   * @param options The options parameters.
   */
  stopContinuousDtmfRecognition(
    callConnectionId: string,
    continuousDtmfRecognitionRequest: ContinuousDtmfRecognitionRequest,
    options?: CallMediaStopContinuousDtmfRecognitionOptionalParams
  ): Promise<void>;
  /**
   * Send dtmf tones.
   * @param callConnectionId The call connection id
   * @param sendDtmfTonesRequest The send dtmf tones request
   * @param options The options parameters.
   */
  sendDtmfTones(
    callConnectionId: string,
    sendDtmfTonesRequest: SendDtmfTonesRequest,
    options?: CallMediaSendDtmfTonesOptionalParams
  ): Promise<CallMediaSendDtmfTonesResponse>;
  /**
   * API to change transcription language.
   * @param callConnectionId The call connection id
   * @param updateTranscriptionDataRequest The updateTranscriptionData request
   * @param options The options parameters.
   */
  updateTranscriptionData(
    callConnectionId: string,
    updateTranscriptionDataRequest: UpdateTranscriptionDataRequest,
    options?: CallMediaUpdateTranscriptionDataOptionalParams
  ): Promise<void>;
  /**
   * Hold participant from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param startHoldMusicRequest The participants to be hold from the call.
   * @param options The options parameters.
   */
  startHoldMusic(
    callConnectionId: string,
    startHoldMusicRequest: StartHoldMusicRequest,
    options?: CallMediaStartHoldMusicOptionalParams
  ): Promise<void>;
  /**
   * Unhold participants from the call using identifier.
   * @param callConnectionId The call connection id.
   * @param stopHoldMusicRequest The participants to be hold from the call.
   * @param options The options parameters.
   */
  stopHoldMusic(
    callConnectionId: string,
    stopHoldMusicRequest: StopHoldMusicRequest,
    options?: CallMediaStopHoldMusicOptionalParams
  ): Promise<void>;
}
